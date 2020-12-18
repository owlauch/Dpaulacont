import { CentroCusto } from 'src/centro-custo/centro-custo.entity';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Despesa {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fonte: number;
  @Column()
  data: Date;
  @Column()
  destinado: string;
  @Column()
  valor: number;
  @OneToOne((type) => Pessoas, (pessoa) => pessoa.id)
  pago_para: Pessoas;
  @OneToOne((type) => CentroCusto, (cc) => cc.id)
  CentroCusto: CentroCusto;
}
