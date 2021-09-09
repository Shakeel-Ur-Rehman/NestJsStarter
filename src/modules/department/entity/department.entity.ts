import { DepartmentItem } from "src/modules/department-item/entity/department-item.entity";
import { PurchaseRequest } from "src/modules/purchase-request/entity/purchase-request.entity";
import { BaseEntity, Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
@Entity('departments')
export class Department extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;  

  @Column()
  type: string

  @Column()
  total_count: number; 

  @Column()
  previous_total: number;
  
  @OneToMany(()=>User, user=>user.department)
  users:User[]

  @OneToMany(()=>DepartmentItem, department_item=>department_item.department)
  department_item: DepartmentItem[]

  @OneToMany(()=>PurchaseRequest,purchase_request=>purchase_request.department)
  purchase_requests:PurchaseRequest[]
}