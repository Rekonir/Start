import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Person} from "../persons.model";

interface IFilmEditor{
	film_id: number
	person_id: number
}

@Table({tableName: 'films_editors', timestamps: false, freezeTableName: true})
export class FilmEditor extends Model<FilmEditor, IFilmEditor> {
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true,
	})
	film_id: number

	@ForeignKey(() => Person)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true,
	})
	person_id: number

	@BelongsTo(() => Person)
	person: Person
}
