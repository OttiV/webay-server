import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import {
  IsString,
  Length,
  MinLength,
  IsUrl,
  IsNumber,
  IsEmail
} from "class-validator";

@Entity()
export default class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(2, 25)
  @Column("text")
  title: string;

  @IsString()
  @MinLength(5)
  @Column("text")
  description: string;

  @IsUrl()
  @Column("text")
  picture: string;

  @IsNumber()
  @Column("text")
  price: number;

  @IsEmail()
  @Column("text")
  email: string;

  @IsNumber()
  @Column("text")
  phone: number;
}
