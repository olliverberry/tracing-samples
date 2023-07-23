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

  async getDog(id: number): Promise<Dog | null> {
    const dog = await this.dogRepository.findOne({
      where: {
        id: id,
      },
    });

    return dog;
  }

  async createDog(dog: Dog) {
    const newDog = this.dogRepository.create(dog);
    return await this.dogRepository.save(newDog);
  }
}