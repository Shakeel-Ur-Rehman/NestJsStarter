import { Department } from "src/modules/department/entity/department.entity";
import { Item } from "src/modules/item/entity/item.entity";
import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('department_items')
export class DepartmentItem extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Item,item=>item.department_items)
    item:Item

    @ManyToOne(()=>Department,department=>department.department_item)
    department:Department
    
}