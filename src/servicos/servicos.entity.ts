import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToOne } from 'typeorm';
@Entity()
export class Servicos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;
  @Column()
  valor_padrao: number;
  @OneToOne(() => Servicos, (servico) => servico.servico)
  servico: Servicos;
}
