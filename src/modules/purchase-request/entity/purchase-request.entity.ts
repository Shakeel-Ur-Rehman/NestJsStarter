import { BiddingRequest } from "src/modules/bidding-request/entity/bidding-request.entity";
import { Department } from "src/modules/department/entity/department.entity";
import { User } from "src/modules/users/entity/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('purcahse_request')
export class PurchaseRequest extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    level: string;

    @Column()
    detail: string;

    @Column()
    urgency: string;

    @Column()
    location: string;

    @Column()
    require_date: Date;

    @Column()
    po_status:string;

    @ManyToOne(()=>User, user=>user.purchase_requests)
    user:User

    @ManyToOne(()=>Department,department=>department.purchase_requests)
    department:Department

    @OneToMany(()=>BiddingRequest,bid_request=>bid_request.purchase_request)
    bidding_requests:BiddingRequest[]

}