import { DepartmentItem } from "src/modules/department-item/entity/department-item.entity";
import { RequestItem } from "src/modules/request-item/entity/request-item.entity";
//import { Department } from "src/modules/department/entity/department.entity";
import { BaseEntity, Column,Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('items')
export class Item extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: string;

    @Column()
    label: string;

    @OneToMany(()=>DepartmentItem, department_item=>department_item.item)
    department_items:DepartmentItem[]
    
    @OneToMany(()=>RequestItem, request_item=>request_item.item)
    request_items: RequestItem[]
}