import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
@Entity('vendors')
export class Vendor extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_name: string;  

  @Column()
  shipping_date: Date

  @Column()
  first_contact: string; 

  @Column()
  second_contact: string;
  
  @OneToOne(()=>User, user=>user.vendor)
  user:User
}