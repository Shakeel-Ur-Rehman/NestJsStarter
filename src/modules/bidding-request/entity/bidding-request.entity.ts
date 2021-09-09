import exp from "constants";
import { Bidding } from "src/modules/bidding/entity/bidding.entity";
import { PurchaseRequest } from "src/modules/purchase-request/entity/purchase-request.entity";
import { User } from "src/modules/users/entity/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('bidding_requests')
export class BiddingRequest extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    closing_date: Date;

    @Column()
    status: string;

    @ManyToOne(()=>PurchaseRequest,p_request=>p_request.bidding_requests)
    purchase_request:PurchaseRequest

    @ManyToOne(()=>User,user=>user.bidding_requests)
    user:User

    @OneToOne(()=>Bidding,bid=>bid.bid_req)
    bid:Bidding


}