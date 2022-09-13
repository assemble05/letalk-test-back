import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Loan {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  cpf: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  fees: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  monthToPay: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  required_value: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  fessPerMonth: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  amountPeerMonth: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: true })
  totalToPay: string;

  @Column({ type: "jsonb", nullable: false, array: false, default: () => "'[]'" })
  public installments!: Array<{	debit_value: string,
  fees:string,
  debt:string,
  installment:string,
  month: string}>
}
