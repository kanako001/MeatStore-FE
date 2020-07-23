import React, {Component} from 'react'

export default class Contact extends Component {

  componentDidMount() {
    this.mouunted = true;
  }

  componentWillUnmount() {
    this.mounted = false; 
  }

  render(){
    return (
      <div className='contact-wrapper current-page'>
        <h1>Contact Us</h1>
  
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet aperiam fugiat! Doloremque nesciunt illum reiciendis, dolor iusto ad adipisci magni quos dicta fugit alias aliquid facilis rem recusandae explicabo?
        Pariatur quos cupiditate ducimus, odio doloribus quo, assumenda itaque eius unde quae, corrupti numquam. Pariatur beatae eum repudiandae, aspernatur voluptatibus exercitationem inventore non tempora repellat nesciunt, earum delectus quae expedita!
        Laborum hic consectetur molestias corporis facere deserunt, veniam iusto totam? Culpa in quia sit eius est voluptatibus, cupiditate asperiores necessitatibus? Tempore consequuntur veniam ex placeat dicta aliquam, dignissimos sapiente eum!
        Aperiam saepe sed ipsam quos, nisi eos ea tenetur dolorem fugit at dolore. Voluptatibus placeat quaerat labore aperiam odio ab iusto fugit rerum autem nulla consequuntur, aliquam laboriosam ea nesciunt.
        Aliquam quibusdam, expedita, deleniti molestiae quas necessitatibus inventore, eligendi quisquam recusandae assumenda deserunt perferendis doloremque eveniet rerum non corporis exercitationem voluptatibus ipsum animi et! Sequi reprehenderit modi amet recusandae perspiciatis.
        Iste omnis, dolor consectetur aut soluta tempore laboriosam dolore perspiciatis quia ipsa distinctio maiores quasi libero veritatis corrupti deserunt animi quaerat repellat nobis inventore doloribus voluptas. Corporis consequatur est neque.
        Sapiente voluptate aut officia voluptates nesciunt expedita eligendi repellat corrupti perspiciatis odio eum mollitia consequatur eaque vel ratione laboriosam, perferendis quisquam quos! Distinctio numquam nulla eius tempore assumenda voluptate quidem.
        Esse aperiam dolore quae id consectetur. Beatae sed, ratione ex omnis commodi voluptas vel velit doloribus culpa quas laboriosam adipisci asperiores, esse corporis, quibusdam ducimus fugiat optio obcaecati saepe recusandae?</div>
      </div>
    );
  }
}
