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

  @Column({ type: "varchar", width: 256, nullable: false, unique: false })
  fees: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: false })
  monthToPay: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: false })
  required_value: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: false })
  fessPerMonth: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: false })
  amountPeerMonth: string;

  @Column({ type: "varchar", width: 256, nullable: false, unique: false })
  totalToPay: string;

  @Column({ type: "jsonb", nullable: false, array: false, default: () => "'[]'" })
  public installments!: Array<{	debit_value: string,
  fees:string,
  debt:string,
  installment:string,
  month: string}>
}
