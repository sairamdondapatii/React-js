
import './Form.css'
const Form = ({formData,handleChange,handleSubmit}) => {

    

  return (
    <div className="form">
        <form action="submit" onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" name='firstName'  id="fname" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lname">Last Name</label><br />
                    <input type="text" name='lastName' value={formData.lastName} id="lname" onChange={handleChange} />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" value={formData.email} id="email" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" value={formData.password} id="password" onChange={handleChange} />
            </div>
            <div>
                <div>
                    <label htmlFor="Phonenumber">Phone Number</label><br />
                    <input type="tel" name="phNumber" value={formData.phNumber} id="Phonenumber" onChange={handleChange} />
                    
                </div>
                <div>
                    <label htmlFor="Country">Country </label><br />
                    <select name="country" id="Country" value={formData.country} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Japan">Japan</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Russia">Russia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="China">China</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                    </select>
                </div>
            </div>
            <div>
                    <div>
                        <label htmlFor="dob">Birth Date</label> <br />
                        <input type="date" name="birthDate" value={formData.birthDate} id="dob" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="img">Choose Avatar</label><br />
                        <input type="file" name="avatar" value={formData.avatar} id="img" onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <p>Select if married</p>
                    <div>
                        <input type="checkbox" name="marriageStatus" id="married" value='true' checked={formData.marriageStatus ==='false' ? false :  true} onChange={handleChange}/>
                        <label htmlFor="married">Marriage Status</label>
                    </div>
                </div>
                <div>
                    <p>Choose gender...</p>
                    <div>
                        <input type="radio" name="gender" id="male" value='Male' checked={formData.gender==='Male'} onChange={handleChange}   />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="female" value='Female' checked={formData.gender==='Female'} onChange={handleChange} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="others" value='Others' checked={formData.gender==='Others'} onChange={handleChange} />
                        <label htmlFor="others">Others</label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
        </form>
    </div>
  )
}

export default Form