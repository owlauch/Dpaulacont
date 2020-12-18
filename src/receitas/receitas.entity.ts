import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Servicos } from 'src/servicos/servicos.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Entity,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fonte: number;
  @Column()
  data_pgto: Date;
  @Column()
  valor: number;
  @Column()
  Ano: number;
  @Column()
  Mes: number;
  @OneToOne(() => Pessoas)
  @JoinColumn()
  cliente: Pessoas;
  @OneToOne(() => Servicos)
  @JoinColumn()
  servico: Servicos;
}
