import { Flex, Skeleton } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

const PLP = (_props: {}, ref: any) => {
  const [filter, setFilter] = useState<null | string>(null);
  const [Sort, setSort] = useState<null | string>(null);

  useImperativeHandle(ref, () => {
    return {
      resetFilter: () => setFilter(null),
      resetSort: () => setSort(null),
    };
  });

  return (
    <>
      {/* Header section */}
      {/* <Flex
        align="center"
        justify="space-between"
        className="m-4 p-4 bg-slate-100 rounded-lg"
      >
        <p className="font-semibold">{`Clothing > For Him >  New Arrivals`}</p>
        <button
          onClick={() => {
            setFilter(null);
            setSort(null);
            console.log("called though the native method");
          }}
          className="py-2 px-4 rounded-lg border-[1px] border-slate-400 text-sm hover:bg-slate-400 hover:text-white transition-all duration-300"
        >
          Clear all filters and sort
        </button>
      </Flex> */}

      {/* Cards container with sort and filter */}
      <div className="border-2 border-red-300 m-4 p-4 rounded-md">
        {/* filter and sort section with products count */}
        <Flex
          align="center"
          justify="space-between"
          className="mb-4  p-4 bg-slate-100 rounded-lg"
        >
          <p className="font-semibold">Products (20)</p>
          <Flex gap={"small"}>
            <button
              className="py-2 px-4 rounded-lg border-[1px] border-slate-400 text-sm hover:bg-slate-400 hover:text-white transition-all duration-300"
              onClick={() => {
                setFilter("Brand : ABC");
              }}
            >
              Filters
            </button>
            <button
              className="py-2 px-4 rounded-lg border-[1px] border-slate-400 text-sm hover:bg-slate-400 hover:text-white transition-all duration-300"
              onClick={() => {
                setSort("Ratings : 4.5 and above");
              }}
            >
              Sort
            </button>
          </Flex>
        </Flex>
        {/* applied filter and sort section UI */}
        {filter || Sort ? (
          <Flex align="center" justify="space-between" className="mb-4">
            <Flex gap={"small"}>
              {filter && (
                <button
                  onClick={() => {
                    setFilter(null);
                  }}
                  className="py-2 px-4 rounded-lg border-[1px] border-slate-400 text-sm hover:bg-slate-400 hover:text-white transition-all duration-300"
                >
                  {`Applied Filter -> ${filter}`} &nbsp;&nbsp; X
                </button>
              )}
              {Sort && (
                <button
                  onClick={() => {
                    setSort(null);
                  }}
                  className="py-2 px-4 rounded-lg border-[1px] border-slate-400 text-sm hover:bg-slate-400 hover:text-white transition-all duration-300"
                >
                  {`Applied Sort -> ${Sort}`} &nbsp;&nbsp; X
                </button>
              )}
            </Flex>
          </Flex>
        ) : (
          <></>
        )}

        {/* cards container grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 16 }, (_, index) => (
            <div key={index}>
              <div className="border-2 border-gray-200 rounded-lg p-4 h-[250px]">
                <Flex vertical gap={"small"}>
                  <Skeleton.Node style={{ height: "40px" }}>
                    &nbsp;
                  </Skeleton.Node>
                  <Skeleton.Node style={{ width: "100%", height: "120px" }}>
                    &nbsp;
                  </Skeleton.Node>
                  <Skeleton.Node style={{ height: "40px", width: "70%" }}>
                    &nbsp;
                  </Skeleton.Node>
                </Flex>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default forwardRef(PLP);
