import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../models/std';
import { SnackBarService } from '../../services/service.component.';

@Component({
  selector: 'app-std-one',
  templateUrl: './std-one.component.html',
  styleUrls: ['./std-one.component.scss']
})
export class StdOneComponent implements OnInit {

  ngOnInit(): void {
  }

  isInEditMode: boolean = false;
  editObj!: Istudent;
  stdsArr: Array<Istudent> = [
    {
      fname: 'Tony',
      lname: 'Stark',
      email: 'tony@starkind.com',
      contact: 1234567890,
      stdId: '123',
      isActive: false
    },
    {
      fname: 'Bruce',
      lname: 'Wayne',
      email: 'bruse@starkind.com',
      contact: 4569871230,
      stdId: '124',
      isActive: true
    },
    {
      fname: 'Stiffen',
      lname: 'Strange',
      email: 'tony@starkind.com',
      contact: 3698521470,
      stdId: '125',
      isActive: false
    },
    {
      fname: 'Clark',
      lname: 'Kent',
      email: 'clark@starkind.com',
      contact: 9876543210,
      stdId: '126',
      isActive: true
    }
  ];

  constructor(
    private snackBar: SnackBarService
  ) { }

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('Email') Email!: ElementRef;
  @ViewChild('Contact') Contact!: ElementRef;
  @ViewChild('isActive') isActive!: ElementRef;

  onStdAdd() {
    let fNameVal = this.fname.nativeElement.value.trim();
    let lNameVal = this.lname.nativeElement.value.trim();
    let emailVal = this.Email.nativeElement.value.trim();
    let contactVal = this.Contact.nativeElement.value.trim();
    let isActiveVal = this.isActive.nativeElement.value;

    if (fNameVal.length > 0 && lNameVal.length > 0 && emailVal.length > 0 && contactVal.length > 0) {

      let newStd: Istudent = {
        fname: fNameVal,
        lname: lNameVal,
        email: emailVal,
        contact: +contactVal,
        stdId: Date.now().toString(),
        isActive: isActiveVal === 'true'
      }

      this.stdsArr.push(newStd);
      this.fname.nativeElement.value = '';
      this.lname.nativeElement.value = '';
      this.Email.nativeElement.value = '';
      this.Contact.nativeElement.value = '';

      this.snackBar.openSnackBar(`The student ${newStd.fname} ${newStd.lname} is added successfully !!!`)

    }
  }

  onRemove(id: string) {
    let getIndex = this.stdsArr.findIndex(s => s.stdId === id)
    let removedStd = this.stdsArr.splice(getIndex, 1)
    this.snackBar.openSnackBar(`The student ${removedStd[0].fname} ${removedStd[0].lname} is removed successfully !!!`)
  }

  onEdit(std: Istudent) {

    this.isInEditMode = true;
    this.editObj = std;
    this.fname.nativeElement.value = std.fname;
    this.lname.nativeElement.value = std.lname;
    this.Email.nativeElement.value = std.email;
    this.Contact.nativeElement.value = std.contact;
    this.isActive.nativeElement.value = std.isActive;
  }

  onUpdate() {
    let UPDATE_ID = this.editObj.stdId;
    let UPDATED_OBJ: Istudent = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.Email.nativeElement.value,
      contact: +this.Contact.nativeElement.value,
      isActive: this.isActive.nativeElement.value === 'true',
      stdId: UPDATE_ID
    }

    let getIndex = this.stdsArr.findIndex(s => s.stdId === UPDATE_ID)
    this.stdsArr[getIndex] = UPDATED_OBJ;

    this.fname.nativeElement.value = '';
    this.lname.nativeElement.value = '';
    this.Email.nativeElement.value = '';
    this.Contact.nativeElement.value = '';
    this.isInEditMode = false;
    this.snackBar.openSnackBar(`The student ${UPDATED_OBJ.fname} ${UPDATED_OBJ.lname} is updated successfully !!!`)

  }
 trackByFun(index: number, std: Istudent){
   return std.stdId
 }
}
