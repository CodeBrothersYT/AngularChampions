
export class Champion {

  id: number;
  firstName: string;
  lastName: string;
  emailId: string;


  constructor(id: number, firstName: string, lastName: string, emailId: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
  }
}
