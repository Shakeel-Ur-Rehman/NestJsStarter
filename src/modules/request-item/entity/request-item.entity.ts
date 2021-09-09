import { Item } from "src/modules/item/entity/item.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('request_items')
export class RequestItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    unit: number;

    @Column()
    manufracture: string;

    @Column()
    expected_unit_price: number;

    @ManyToOne(()=>Item, item=>item.request_items)
    item:Item
}