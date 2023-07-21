import { Injectable } from '@nestjs/common';
import { Dog } from './dog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>,
  ) {}

  async getDogs() {
    return await this.dogRepository.find({
        skip: 0,
        take: 100,
    });
  }
}
