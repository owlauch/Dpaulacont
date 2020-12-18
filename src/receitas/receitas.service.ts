import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { Receita } from './receitas.entity';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(Receita)
    private readonly pessoaRepository: Repository<Receita>,
  ) {}

  create(createReceita: Receita): Promise<Receita> {
    return this.pessoaRepository.save(createReceita);
  }

  async findAll(): Promise<Receita[]> {
    return await this.pessoaRepository.find({ relations:['cliente','servico']});
  }

  findOne(id: string): Promise<Receita> {
    return this.pessoaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.pessoaRepository.delete(id);
  }
}
