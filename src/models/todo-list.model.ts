import {Entity, model, property} from '@loopback/repository';

@model()
export class TodoList extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  color?: string;


  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}
