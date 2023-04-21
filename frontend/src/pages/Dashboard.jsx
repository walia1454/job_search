import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Job from "../components/job/Job";

const faqs = [
  {
    question: "category 1",
    answer: "I don'.",
  },
  {
    question: "category 2",
    answer: "I don'.",
  },
  {
    question: "category 3",
    answer: "I don'.",
  },
  // More questions...
];

const people = [
  { id: 1, name: "option 1" },
  { id: 2, name: "option 2" },
  { id: 3, name: "option 3" },
  { id: 4, name: "option 4" },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="   h-[85vh] flex  shoadow-md">
        <div className="leftSide overflow-y-scroll hidden md:flex py-3 px-6 w-1/3 border">
          <dl className="space-y-2 w-full">
            <h2 className="text-2xl text-start mt-4 font-bold text-gray-600 ">
              Filter By
            </h2>
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="w-full pl-4">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex  hover:bg-gray-100 px-4 py-1  rounded-md w-full items-start justify-between text-left text-gray-600">
                        <span className="text-base font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    {/* list items */}
                    <Disclosure.Panel
                      as="dd"
                      className="mt-2 pr-12 flex pl-8 items-start"
                    >
                      <p className="text-start text-gray-600">
                        <div className="mt-1 mb-6">
                          {people.map((person, personIdx) => (
                            <div
                              key={personIdx}
                              className="relative flex items-start py-1"
                            >
                              <div className="ml-3 flex h-6 pr-3 items-center">
                                <input
                                  id={`person-${person.id}`}
                                  name={`person-${person.id}`}
                                  type="checkbox"
                                  className="h-5 w-5 rounded  text-gray-600 focus:ring-0"
                                />
                              </div>
                              <div className="min-w-0 flex-1 text-sm leading-6">
                                <label
                                  htmlFor={`person-${person.id}`}
                                  className="select-none font-medium text-gray-900"
                                >
                                  {person.name}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="right-side w-2/3 flex flex-col pt-3 px-4">
          {/* search box */}
          <div className="w-full h-[15%]  px-10 pt-6 ">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
              placeholder="Search Job"
            />
          </div>
          <div className="jobs_container h-[80%] flex flex-col overflow-y-scroll">
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
