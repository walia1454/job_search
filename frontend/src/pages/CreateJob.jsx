import React from "react";
import Layout from "../components/layouts/Layout";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        className=" float-left  m-3 px-4 py-2 text-white rounded-md bg-gray-700 hover:bg-cyan-950 "
      >
        Go Back
      </button>
      <form className="pt-5">
        <div className="space-y-12 bg-white p-5 rounded-md w-full">
          <div className=" w-full border-gray-900/10 pb-12">
            {/* job title */}
            <div className="mt-10 mb-5   gap-y-8 w-full ">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-left text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-600 ">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Job title"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* description */}
            <label
              htmlFor="title"
              className="block mb-3 text-left text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
              <label for="comment" class="sr-only">
                Add your comment
              </label>
              <textarea
                rows="3"
                name="comment"
                id="comment"
                class="block w-full resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6"
                placeholder="Job Description"
              ></textarea>

              <div class="py-2" aria-hidden="true">
                <div class="py-px">
                  <div class="h-9"></div>
                </div>
              </div>
            </div>

            {/* email */}
            <div className="mt-10 mb-5  gap-y-8 w-full ">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-left text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-600 ">
                    <input
                      type="email"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* salary */}
            <div className="mt-10 mb-5  gap-y-8 w-full ">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-left text-sm font-medium leading-6 text-gray-900"
                >
                  Salary (optional) $
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-600 ">
                    <input
                      type="number"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="$1000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* create a select input with two option remote and local */}
            <div className="mt-10 mb-5  gap-y-8 w-full ">
              <div className="w-full">
                <label
                  htmlFor="title"
                  className="block text-left text-sm font-medium leading-6 text-gray-900"
                >
                  Job Type
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-600 ">
                    <select
                      name="cars"
                      id="cars"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    >
                      <option value="volvo">Remote</option>
                      <option value="saab">Local</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* attachments */}
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-left text-sm font-medium leading-6 text-gray-900"
              >
                Attachment
              </label>
              <div className="mt-2 mb-5 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-cyan-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 hover:text-cyan-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">up to 10MB</p>
                </div>
              </div>
            </div>
            <button className="float-right px-3 py-2 bg-cyan-950 text-white m-4 rounded-md">
              Create
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default CreateJob;
