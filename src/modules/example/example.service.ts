import { Injectable } from '@nestjs/common';
import { CreateExampleInput } from './dto/create-example.input';
import { UpdateExampleInput } from './dto/update-example.input';

@Injectable()
export class ExampleService {
  create(createExampleInput: CreateExampleInput) {
    return { exampleField: 1 }; // valor de prueba
  }

  findAll() {
    return [
      { exampleField: 1, number1: 1 },
      { exampleField: 2, number1: 3 },
    ];
  }

  findOne(id: number) {
    return { exampleField: id }; // devuelve un número, no un string
  }

  update(id: number, updateExampleInput: UpdateExampleInput) {
    return { exampleField: id + 100 }; // ejemplo de cambio
  }

  remove(id: number) {
    return { exampleField: id };
  }
}
