import { Bidding } from "src/modules/bidding/entity/bidding.entity";
import { User } from "src/modules/users/entity/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('attachments')
export class Attachment extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    type:string;

    @Column()
    link:string;

    @ManyToOne(()=>User,user=>user.attachments)
    user:User

    @OneToMany(()=>Bidding,bid=>bid.attachment)
    biddings:Bidding[]


}