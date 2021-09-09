import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { type } from 'os';
import { Vendor } from '../../vendor/entity/vendor.entity';
import { Department } from '../../department/entity/department.entity';
import { PurchaseRequest } from 'src/modules/purchase-request/entity/purchase-request.entity';
import { BiddingRequest } from 'src/modules/bidding-request/entity/bidding-request.entity';
import { Attachment } from 'src/modules/attachment/entity/attachment.entity';

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @Column()
  is_local: boolean;

  @Column()
  is_active: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(()=>Department,department=>department.users)
  department: Department

  @OneToOne(()=>Vendor, vendor=>vendor.user)
  @JoinColumn()
  vendor:Vendor

  @OneToMany(()=>PurchaseRequest, purchase_request=>purchase_request.user)
  purchase_requests:PurchaseRequest[]

  @OneToMany(()=>BiddingRequest,bid_request=>bid_request.user)
  bidding_requests:BiddingRequest[]

  @OneToMany(()=>Attachment,attachment=>attachment.user)
  attachments:Attachment[]

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
