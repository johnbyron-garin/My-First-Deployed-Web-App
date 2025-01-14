import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share Your Dreams
      <br className='max-md:hidden' />
      <span className='yellow_gradient text-center'> A Place Where Aspirations Come Alive</span>
    </h1>
    <p className='desc text-center'>
      DreamCatch is an open platform where individuals can share their dreams, connect with like-minded dreamers, and inspire a world full of possibilities.
    </p>

    <Feed />
  </section>
);

export default Home;