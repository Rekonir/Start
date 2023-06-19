import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {catchError, firstValueFrom, throwError, timeout} from "rxjs";
import {FilmService} from "../film/film.service";
import {PersonFullInfoDto} from "../dto/person-full-info.dto";
import {FilmPersonsDto} from "../dto/film-persons.dto";
import {DirectorActorNamePartDto} from "../dto/director-actor-name-part.dto";
import {PersonNamePartDto} from "../dto/person-name-part.dto";

@Injectable()
export class PersonService {

	constructor(@Inject("PERSON_SERVICE") private readonly personClient: ClientProxy,
							@Inject(forwardRef(() => FilmService)) private readonly filmService: FilmService) {
	}

	async getPersonById(id: number): Promise<PersonFullInfoDto>{
		let personData = await firstValueFrom(this.personClient.send({cmd: "get person by id"}, id)
			.pipe(timeout({
					each: 2000,
					with: () => throwError(() => new HttpException('GATEWAY TIMEOUT', HttpStatus.GATEWAY_TIMEOUT))
				}),
				catchError((error) => {
					return throwError(() => new HttpException(error.message, error.status));
				})
			)
		)
		personData = await this.filmService.getFilmsByPersonId(personData)
		return personData
	}

	async getPersonsByFilmId(id: number): Promise<FilmPersonsDto> {
		const persons = await firstValueFrom(this.personClient.send({cmd: "get persons by film id"}, id)
			.pipe(timeout({
					each: 2000,
					with: () => throwError(() => new HttpException('GATEWAY TIMEOUT', HttpStatus.GATEWAY_TIMEOUT))
				}),
				catchError((error) => {
					return throwError(() => new HttpException(error.message, error.status));
				})
			)
		)

		return persons
	}

	async findPersonsByName(NamePart: DirectorActorNamePartDto) {
		const persons = await firstValueFrom(this.personClient.send({cmd: "get persons by name Part"}, NamePart)
			.pipe(timeout({
					each: 2000,
					with: () => throwError(() => new HttpException('GATEWAY TIMEOUT', HttpStatus.GATEWAY_TIMEOUT))
				}),
				catchError((error) => {
					return throwError(() => new HttpException(error.message, error.status));
				})
			)
		)

		return persons
	}

	async getPersonsByNamePart(personNamePartDto: PersonNamePartDto) {
		const persons = this.personClient.send({cmd: "get persons by role and name part"}, personNamePartDto)
			.pipe(timeout({
					each: 2000,
					with: () => throwError(() => new HttpException('GATEWAY TIMEOUT', HttpStatus.GATEWAY_TIMEOUT))
				}),
				catchError((error) => {
					return throwError(() => new HttpException(error.message, error.status));
				})
			)


		return persons
	}
}
