const todoTitle = 'call familly';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props) {
   const {titleText,descText}=props;
  return <div className='cardStyle'>
    <div>
  
    <h1>Todo App </h1>
      <h3 >{todoTitle}</h3>
      <p >{dateName + "/" + monthName + '/' + currentYear}</p>
      {/* <p className='headingStyle'> {props.titleText}</p>
      <p className='headingStyle'> {props.descText}</p> */}
      <p className='headingStyle'> {titleText}</p>
      <p className='headingStyle'> {descText}</p>
      <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo saepe ad numquam dolore. Eveniet animi temporibus, id ut dolorem tempora fuga iure tenetur eum perferendis iusto dignissimos, est, aliquam ipsum!</h5>
    </div>
  </div>


}
export default Card;

