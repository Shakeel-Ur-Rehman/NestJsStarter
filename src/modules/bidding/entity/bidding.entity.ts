import { Attachment } from "src/modules/attachment/entity/attachment.entity";
import { BiddingRequest } from "src/modules/bidding-request/entity/bidding-request.entity";
import { BaseEntity, Column, Entity, ManyToOne,OneToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('biddings')
export class Bidding extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    shipping_date:Date;

    @Column()
    discount:number;

    @Column()
    detail:string;

    @Column()
    advance_amount:number;

    @Column()
    pm_status:string;

    @Column()
    po_status:string;

    @Column()
    cpo_status:string;

    @ManyToOne(()=>Attachment,attachment=>attachment.biddings)
    attachment:Attachment

    @OneToOne(()=>BiddingRequest, bid_req=>bid_req.bid)
    @JoinColumn()
    bid_req:BiddingRequest

}