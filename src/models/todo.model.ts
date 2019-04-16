import {Entity, model, property, hasMany} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @property({
    type: 'string',
  })
  remindAtAddress?: string; // address, city, zipcode

  @property({
    type: 'string',
  })
  remindAtGeo: string; // latitude, longitude

  @hasMany(() => Todo)
  todos?: Todo[];

  @property()
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
