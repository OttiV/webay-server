import { BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Exclude } from "class-transformer";
import { MinLength, IsString, IsEmail } from "class-validator";
import * as bcrypt from "bcrypt";
// import { Ad } from "../ads/entity";
// import { Comment } from "../comments/entity";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @MinLength(2)
  @Column("text")
  firstName: string;

  @IsString()
  @MinLength(2)
  @Column("text")
  lastName: string;

  @IsEmail()
  @Column("text")
  email: string;

  @IsString()
  @MinLength(8)
  @Column("text")
  @Exclude({ toPlainOnly: true })
  password: string;

//   @OneToMany(_ => Comment, comment => comment.user, { eager: true })
//   comment: Comment[];

//   @OneToMany(_ => Ad, ad => ad.user, { eager: true })
//   Ads: Ad[];


  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10);
    this.password = hash;
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password);
  }
}
