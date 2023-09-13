using {demo} from '../db/schema';

@path : 'service/demo'
service DemoService @(requires: 'authenticated-user') {

    entity Departments as select from demo.Departments;

    entity Employees as select from demo.Employees;
}
