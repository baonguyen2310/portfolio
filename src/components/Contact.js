import { 
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaLinkedin,
 } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className='contact'>
      <h1>Contact</h1>
      <p>Email: 1phe.com@gmail.com</p>
      <p>SDT: 0123456xxx</p>
      <div class="social-media-container">
        <FaFacebookSquare />
        <FaGithubSquare />
        <FaLinkedin />
        <FaTwitterSquare />
      </div>
    </section>
  );
};

export { Contact };
