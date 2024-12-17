import Home from "@/components/homeLogo";

import { client } from "../../../sanity/client";

export default async function PricingPage() {
  const data = await client.fetch(
    "{'greensFees':*[_type == 'greensFees'],'hours':*[_type == 'siteSettings']{hours}}"
  );
  console.log(
    "%c Greens Fees: " + "\n" + JSON.stringify(data, null, 2),
    "color: aquamarine"
  );
  console.log(
    "%c hours: " + "\n" + JSON.stringify(data.hours[0].hours, null, 2),
    "color: lightpink"
  );
  const h = data.hours[0].hours;
  const gf = data.greensFees[0];
  const wd = gf.weekdayGreensFees;
  const we = gf.weekendGreensFees;
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center md:mx-auto lg:text-left text-left">
            <h1 className="text-4xl font-bold text-gray-900  sm:text-5xl md:text-6xl text-left">
              Rack
              <span className="block text-orange-500">Rates</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative">
              {/* table start table start table start table start table start table start table start */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {wd.rows[0].cells.map((item, index) => (
                      <th scope="col" className="px-6 py-3" key={index}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {wd.rows.slice(1).map((item, index) => (
                    <tr
                      scope="col"
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.cells[0]}
                      </th>
                      {item.cells.slice(1).map((item, index) => (
                        <td className="px-6 py-4" key={index}>
                          {" "}
                          {item}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* table end table end table end table end table end table end table end */}
            </div>

            <div className="relative">
              {/* table start table start table start table start table start table start table start */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {we.rows[0].cells.map((item, index) => (
                      <th scope="col" className="px-6 py-3" key={index}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {we.rows.slice(1).map((item, index) => (
                    <tr
                      scope="col"
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.cells[0]}
                      </th>
                      {item.cells.slice(1).map((item, index) => (
                        <td className="px-6 py-4" key={index}>
                          {" "}
                          {item}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* table end table end table end table end table end table end table end */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <div className="logo-wrapper">
                <Home />
              </div>
              <div className="lil-line"></div>
              <div className="hours-wrapper">
                <div className="hours-heading">Hours</div>
                <div
                  className="hours"
                  style={{ color: "oklch(.551 .027 264.364)" }}
                >
                  {h.startDay} - {h.endDay}, {h.startTime} - {h.endTime}
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                A charming, compact golf course nestled amid rolling green
                hills, featuring well-manicured fairways, sparkling water
                hazards, and scenic tree-lined paths. Its cozy layout offers
                serene views and a delightful challenge for golfers of all
                levels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
