import { useEffect, useRef, useState } from 'react';
import './App.css';
import ContentBox from './component/ContentBox';
import Navbar from './component/Navbar';

function App() {
  let number = 1;
  const [message, setMessage] = useState('Hello World😎');
  const [enlarge, setEnlarge] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Scroll to the target section when it becomes visible
    if (sectionRef.current && visible) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visible]);

  return (
    <div className="container">
      <Navbar />
      <div
        className="welcome_message"
        onClick={() => {
          setMessage('Have a Good Time!');
          setEnlarge('enlarge');
        }}
      >
        <h1 className={enlarge}>{message}</h1>
      </div>

      <section>
        <h2>Section Title</h2>
        <div className="content_box_container">
          <ContentBox number={number++} />
          <ContentBox number={number++} />
          <ContentBox number={number++} />
          <ContentBox number={number++} />
        </div>
      </section>
      <button type="button" onClick={() => setVisible(true)}>
        Call to Action
      </button>

      {visible ? (
        <section className="noAnimation" ref={sectionRef}>
          <h2>Section Title</h2>
          <div className="content_box_container">
            <ContentBox number={number++} />
            <ContentBox number={number++} />
            <ContentBox number={number++} />
            <ContentBox number={number++} />
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default App;
