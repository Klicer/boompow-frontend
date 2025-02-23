import React from "react";
import { Skeleton } from "components/Skeleton";
import { formatBan } from "components/Banano";

// https://stackoverflow.com/a/39466341
// Get Ordinal Suffix
function nth(n) {
  return ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";
}

const TopContributors = ({ topContributors }) => {
  return (
    <div className="bg-dark rounded-md rounded-l-none border-banano-yellow border-l-4 w-full md:w-80 drop-shadow-lg shadow-black h-[470px]">
      <div className="p-4">Top Contributors</div>
      <div className="text-sm overflow-y-scroll h-[406px]">
        {topContributors ? (
          <React.Fragment>
            {topContributors.slice(0, 25).map((c, index) => {
              return (
                <div
                  key={index}
                  className="py-4 border-b border-banano-gray-dark first:border-t last:border-b p-4 flex justify-between"
                >
                  <div className="flex">
                    <img
                      src={`https://monkey.banano.cc/api/v1/monkey/${c.banAddress}`}
                      alt="avatar"
                      width="48px"
                      height="48px"
                      className="rounded-full bg-banano-gray-dark"
                    />
                    <div className="flex flex-col ml-4 justify-between">
                      <div className="text-gray-300">
                        <a
                          href={`https://creeper.banano.cc/account/${c.banAddress}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {c.banAddress.substr(0, 13)}...
                        </a>
                      </div>
                      <div>{formatBan(c.totalPaidBanano)}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium tabular-nums">
                    <div>
                      {index + 1}
                      {nth(index + 1)}
                    </div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {new Array(10).fill({}).map((_, index) => {
              return (
                <div
                  key={index}
                  className="py-4 border-b border-banano-gray-dark first:border-t last:border-b p-4 flex justify-between"
                >
                  <div className="flex">
                    <Skeleton size="rounded-full bg-banano-gray-dark h-[48px] w-[48px]" />
                    <div className="flex flex-col ml-4 justify-between">
                      <div className="text-gray-300">
                        <Skeleton text="ban_1boompow1..." />
                      </div>
                      <div>
                        <Skeleton text="BAN 10,000.00" />
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 font-medium">
                    <div>
                      <Skeleton text="1st" />
                    </div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default TopContributors;
