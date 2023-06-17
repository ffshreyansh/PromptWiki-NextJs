import Link from "next/link"


const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left ">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{type} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ducimus harum, vero accusamus iusto repudiandae assumenda repellendus neque accusantium provident.</p>
      <form onSubmit={handleSubmit} className="glassmorphism max-w-2xl mt-10 w-full gap-7">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
        
        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder="Write your prompt here..."
          required
          className="form_textarea"
        />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 mt-4">Tags (#web, #technology etc.)</span>
        
        <input
          value={post.tags}
          onChange={(e) => setPost({ ...post, tags: e.target.value })}
          placeholder="#Tags"
          required
          className="form_input"
        />
        </label>
        <div className="flex-end mx-3 mt-5 mb-5 gap-4">
          <Link href="/">
          Cancel
          </Link>

          <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 bg-primary-orange rounded-full text-white"
          >
            {submitting ? `Creating...` : type }
          </button>
        </div>
      </form>
    </section>


  )
}

export default Form