import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('dogs')
export class Dog {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  breed: string;

  @Column()
  age: number;

  @Column()
  color: string;

  @Column()
  weight: number;
}
