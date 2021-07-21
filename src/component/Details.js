import React, { Component } from 'react'
import swal from 'sweetalert';

class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            salutation:"",
            pro_fname:"",
            pro_mname:"",
            pro_lname:"",
            nom_fname:"",
            nom_mname:"",
            nom_lname:"",
            pro_gender:"",
            nom_gender:"",
            emailid:"",
            mobile:"",
            pro_dob:"",
            nom_dob:"",
            occupation:"",
            annualIncome:0,
            panCard:"",
            maritalStatus:"",
            height:"",
            weight:"",
            relationship:"",
            dataError: {
                pro_fname: "",
                pro_mname:"",
                pro_lname:"",
                panCard:"",
                emailid: "",
                mobile: "",
                pro_dob:"",
                nom_dob:"",
                nom_fname:"",
                nom_mname:"",
                nom_lname:"",
                annualIncome:"",
              },
        }
    }
   // dropdown 
    salutationChange = async (e) => {
        this.setState({
            salutation: e.target.value,
        });
    }
    proGenderChange = async (e) => {
        this.setState({
            pro_gender: e.target.value,
        });
    }
   
    occupationChange = async (e) => {
        this.setState({
            occupation: e.target.value,
        });
    }
    maritalSChange = async (e) => {
        this.setState({
            maritalStatus: e.target.value,
        });
    }
    nomGenderChange = async (e) => {
        this.setState({
            nom_gender: e.target.value,
        });
    }
    relationshipChange = async (e) => {
        this.setState({
            relationship: e.target.value,
        });
    }
    // validating the fields with error message
    validate = (propname) => {
        let UpdatedDataError = { ...this.state.dataError };
        let validation = 0;
        let Message = "";
        let err ="";
        if (propname === "pro_fname") {
          if ((this.state.pro_fname === "") || (this.state.pro_fname === null)) {
            UpdatedDataError["pro_fname"] = <strong>*Field Cannot be empty</strong>;
          }
          else{
            UpdatedDataError["pro_fname"] = "";
          }
        }
  
        else if (propname === "pro_mname") {
          if ((this.state.pro_mname === "") || (this.state.pro_mname === null)) {
            UpdatedDataError["pro_mname"] = <strong>*Field Cannot be empty</strong>;
          }
          else{
            UpdatedDataError["pro_mname"] = "";
          }
        }

        else if (propname === "pro_lname") {
            if ((this.state.pro_lname === "") || (this.state.pro_lname === null)) {
              UpdatedDataError["pro_lname"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["pro_lname"] = "";
            }
          }
    
        else if (propname === "panCard") {
            if ((this.state.panCard === "") || (this.state.panCard === null)) {
              UpdatedDataError["panCard"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["panCard"] = "";
            }
          }

          
        else if (propname === "emailid") {
            if ((this.state.emailid === "") || (this.state.emailid === null)) {
              UpdatedDataError["emailid"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["emailid"] = "";
            }
          }
    
        else if (propname === "mobile") {
            if ((this.state.mobile === "") || (this.state.mobile === null)) {
              UpdatedDataError["mobile"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["mobile"] = "";
            }
          }

          else if (propname === "pro_dob") {
            if ((this.state.pro_dob === "") || (this.state.pro_dob === null)) {
              UpdatedDataError["pro_dob"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["pro_dob"] = "";
            }
          }
    
        else if (propname === "nom_dob") {
            if ((this.state.nom_dob === "") || (this.state.nom_dob === null)) {
              UpdatedDataError["nom_dob"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["nom_dob"] = "";
            }
          }

          else if (propname === "nom_fname") {
            if ((this.state.nom_fname === "") || (this.state.nom_fname === null)) {
              UpdatedDataError["nom_fname"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["nom_fname"] = "";
            }
          }
    
        else if (propname === "nom_mname") {
            if ((this.state.nom_mname === "") || (this.state.nom_mname === null)) {
              UpdatedDataError["nom_mname"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["nom_mname"] = "";
            }
          }

          else if (propname === "nom_lname") {
            if ((this.state.nom_lname === "") || (this.state.nom_lname === null)) {
              UpdatedDataError["nom_lname"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["nom_lname"] = "";
            }
          }
    
        else if (propname === "annualIncome") {
            if ((this.state.annualIncome === "") || (this.state.annualIncome === null) ) {
              UpdatedDataError["annualIncome"] = <strong>*Field Cannot be empty</strong>;
            }
            else{
              UpdatedDataError["annualIncome"] = "";
            }
          }
        this.setState({dataError: UpdatedDataError});
    }
  
    // handling all input fields
    handleAll = (e) =>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

   
    // validating the numbers length
    maxLengthCheck = (object) => {if (object.target.value.length > object.target.maxLength) {
        object.target.value = object.target.value.slice(0, object.target.maxLength)
         }
       } 

    // clearing all fields on single click
    onClear = ()=>{
        this.setState({
            salutation:"",
            pro_fname:"",
            pro_mname:"",
            pro_lname:"",
            nom_fname:"",
            nom_mname:"",
            nom_lname:"",
            pro_gender:"",
            nom_gender:"",
            emailid:"",
            mobile:"",
            pro_dob:"",
            occupation:"",
            annualIncome:"",
            panCard:"",
            maritalStatus:"",
            height:"",
            weight:"",
            relationship:"",
            nom_dob:"",
        })
    }
    
    onSubmit = async(e) => {
       
        // annualIncome:"",
            if((this.state.annualIncome <500000) || (this.state.annualIncome >2500000)){
                swal('salary range 500000 - 2500000')
            }
            let UpdatedDataError = { ...this.state.dataError };
            let validation = 0;
            let Message = "";
        
            if ((this.state.pro_fname === "") || (this.state.pro_fname === null)) {
        
              UpdatedDataError.pro_fname ="*" + "Enter value";
              validation = validation + 1;
              Message = Message + validation + ". " + "Enter first name" + "\n";
            }
            if ((this.state.pro_mname === "") || (this.state.pro_mname === null)) {
        
                UpdatedDataError.pro_mname ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter middle name" + "\n";
            }
            
            if ((this.state.pro_lname === "") || (this.state.pro_lname === null)) {
        
                UpdatedDataError.pro_lname ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter last name" + "\n";
            }  
          
            if ((this.state.panCard === "") || (this.state.panCard === null)) {
        
                UpdatedDataError.panCard ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter pan card" + "\n";
            }  

            if ((this.state.emailid === "") || (this.state.emailid === null)) {
        
                UpdatedDataError.emailid ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter emailid" + "\n";
            }  

            if ((this.state.mobile === "") || (this.state.mobile === null)) {
        
                UpdatedDataError.mobile ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter mobile number" + "\n";
            }  

            if ((this.state.pro_dob === "") || (this.state.pro_dob === null)) {
        
                UpdatedDataError.pro_dob ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter DOB" + "\n";
            }  

            if ((this.state.nom_dob === "") || (this.state.nom_dob === null)) {
        
                UpdatedDataError.nom_dob ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter nominee Dob" + "\n";
            }  

            if ((this.state.nom_fname === "") || (this.state.nom_fname === null)) {
        
                UpdatedDataError.nom_fname ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter nominee first name" + "\n";
            }  

            if ((this.state.nom_mname === "") || (this.state.nom_mname === null)) {
        
                UpdatedDataError.nom_mname ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter nominee middle name" + "\n";
            }  

            if ((this.state.nom_lname === "") || (this.state.nom_lname === null)) {
        
                UpdatedDataError.nom_lname ="*" + "Enter value";
                validation = validation + 1;
                Message = Message + validation + ". " + "Enter nominee last name" + "\n";
            }  
            if (validation > 0) {
              this.setState({ dataError: UpdatedDataError });
              swal({ icon: "error", text: "Cannot proceed furthur" + " \n\n" + Message, button: "OK"});
            }
            else{
                // swal('Api structure is being commented ')
                swal({ icon: "success", text: "you made it, and API Structure is being commented" , button:'Ok'  });
                      // api struture
            
            // const url = "your URL"
            // const jsonData = {
            //     mobile: this.state.mobile,
            //   };
            // const OuterJson = JSON.stringify(jsonData)

            // needs to install trackpromise
            // await trackPromise(axios.post(url, , {
            //     headers: {
            //       "Content-type": "application/json"
            //     },
            //   }).then((response) => {
            //     console.log(response)
            //   })
            //   )
            }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                <form>
                  <div className="proposer_details">
                    <div className="col-lg-12 col-md-12 col-sm-12 row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 head_content">
                           <h5>Proposer Details</h5> 
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 details_content forms row">
                        {/* <form> */}
                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Salutation</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                         <select className="form-control selectwidth" onChange={this.salutationChange} 
                                                value={this.state.salutation} >
                                                    <option  value="select"> select</option> 
                                                    <option  value="mr"> Mr</option> 
                                                    <option value="mrs"> Mrs</option>                   
                                         </select>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">First Name</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="pro_fname" value={this.state.pro_fname} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("pro_fname")} error={this.state.dataError.pro_fname ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.pro_fname }</span>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Middle Name</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                    <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="pro_mname" value={this.state.pro_mname} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("pro_mname")} error={this.state.dataError.pro_mname ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.pro_mname }</span>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Last Name</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="pro_lname" value={this.state.pro_lname} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("pro_lname")} error={this.state.dataError.pro_lname ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.pro_lname }</span>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Gender</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                         <select className="form-control selectwidth" onChange={this.proGenderChange} 
                                                value={this.state.pro_gender} >
                                                    <option  value="select"> select</option> 
                                                    <option  value="male"> Male</option> 
                                                    <option value="female"> Female</option>                   
                                         </select>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">EmailId</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="email" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="emailid" value={this.state.emailid} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("emailid")} error={this.state.dataError.emailid ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.emailid }</span>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Mobile </label>
                                    <div class="col-md-12 col-sm-12 col-12 ">

                                    <input type="number" autoComplete="off"  class="form-control selectwidth text-left"  
                                        maxLength = "10" onInput={this.maxLengthCheck} 
                                         name="mobile" value={this.state.mobile} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("mobile")} error={this.state.dataError.mobile ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.mobile }</span>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Date of Birth</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="date" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="pro_dob" value={this.state.pro_dob} onChange={this.handleAll}  min="2003-01-01"
                                         onBlur={(propname) => this.validate("pro_dob")} error={this.state.dataError.pro_dob ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.pro_dob }</span>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Occupation</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                         <select className="form-control selectwidth" onChange={this.occupationChange} 
                                                value={this.state.dummySelect} >
                                                    <option  value="select"> select</option> 
                                                    <option  value="salaried"> Salaried</option> 
                                                    <option value="buisness"> Buisness</option>  
                                                    <option value="student"> Student</option>                   
                                         </select>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Annual Income</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="annualIncome" value={this.state.annualIncome} onChange={this.handleAll} 
                                         min="500000" max="2500000"
                                         onBlur={(propname) => this.validate("annualIncome")} error={this.state.dataError.annualIncome ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.annualIncome }</span>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Pan Card</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="panCard" value={this.state.panCard} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("panCard")} error={this.state.dataError.panCard ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.panCard }</span>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Marital Status</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                    <select className="form-control selectwidth" onChange={this.maritalSChange} 
                                                value={this.state.dummySelect} >
                                                    <option  value="select"> select</option> 
                                                    <option  value="single"> Single</option> 
                                                    <option value="married"> Married</option>  
                                                    <option value="widow"> Widow</option>                   
                                    </select>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
             
                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Height</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="height" value={this.state.height} onChange={this.handleAll} />
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Weight</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="weight" value={this.state.weight} onChange={this.handleAll} />
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        {/* </form>     */}
                        </div>
                    </div>
                  </div>
                  {/* nominee section */}
                  <div className="nomi_details">
                  <div className="col-lg-12 col-md-12 col-sm-12 row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 head_content mt-2">
                           <h5>Nominee Details</h5>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 details_content forms row">
                        {/* <form> */}

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">First Name</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                        <input type="text" autoComplete="off"  className="form-control selectwidth text-left"  
                                         name="nom_fname" value={this.state.nom_fname} onChange={this.handleAll}  
                                         onBlur={(propname) => this.validate("nom_fname")} error={this.state.dataError.nom_fname ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.nom_fname }</span>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Middle Name</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                        <input type="text" autoComplete="off"  className="form-control selectwidth text-left"  
                                         name="nom_mname" value={this.state.nom_mname} onChange={this.handleAll}  
                                         onBlur={(propname) => this.validate("nom_mname")} error={this.state.dataError.nom_mname ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.nom_mname }</span>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Last Name</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                        <input type="text" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="nom_lname" value={this.state.nom_lname} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("nom_lname")} error={this.state.dataError.nom_lname ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.nom_lname }</span>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Relationship</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                    <select className="form-control selectwidth" onChange={this.relationshipChange} 
                                                value={this.state.dummySelect} >
                                                <option  value="select"> select</option> 
                                                    <option  value="father"> Father</option> 
                                                    <option value="mother"> Mother</option>  
                                                    <option value="son"> Son</option> 
                                                    <option value="daughter"> Daughter</option> 
                                                    <option value="grand"> Grand</option>                   
                                                    
                                    </select>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 row">
                                <div className="col-lg-6 col-md-6 col-sm-12 ">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Date of Birth</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                                
                                        <input type="date" autoComplete="off"  class="form-control selectwidth text-left"  
                                         name="nom_dob" value={this.state.nom_dob} onChange={this.handleAll} 
                                         onBlur={(propname) => this.validate("nom_dob")} error={this.state.dataError.nom_dob ? true : false}
                                            />
                                        <span style={{color: "red",}}>{this.state.dataError.nom_dob }</span>
                                    
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 style_left">
                                <div className="form-group  row mb-2">
                                <label class=" col-md-12 col-sm-12 col-12 col-form-label text-left">Gender</label>
                                    <div class="col-md-12 col-sm-12 col-12 ">
                               
                                    <select className="form-control selectwidth" onChange={this.nomGenderChange} 
                                                value={this.state.nom_gender} >
                                                    <option  value="select"> select</option> 
                                                    <option  value="male"> Male</option> 
                                                    <option value="female"> Female</option>      
                                    </select>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        {/* </form>     */}
                        </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 row py-2">
                     <div className="col-lg-4 col-md-4 col-sm-12 col-12 "></div>  
                     <div className="row  col-lg-8 col-md-8 col-sm-12 col-12 btn_style">
                        <div className=" text-center col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <input type="button" className="btn clickbtn " id="btn_Submit" value="clear" onClick={() => this.onClear()} />
                        </div>
                        <div className=" text-center col-lg-6 col-md-6 col-sm-6 col-12 ">
                            <input type="button" className="btn clickbtn " id="btn_Submit" value="continue" onClick={() => this.onSubmit()} />
                        </div>
                    </div>
                  </div>

                </form>
                </div>
            </div>
        )
    }
}

export default Details;