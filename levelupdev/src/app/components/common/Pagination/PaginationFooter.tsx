import { Button } from "flowbite-react";
import { useEffect, useState, ChangeEvent } from "react";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

interface ItemsPerPageOption {
  id: string;
  value: string;
  name: string;
}

interface PaginationFooterProps {
  data: any[];
  itemsLabel: string;
  itemsPerPageOptions: ItemsPerPageOption[];
  itemsPerPageText: string;
  pageLabel: string;
  prevPageLabel: string;
  nextPageLabel: string;
  shouldResetPage: boolean;
  handlePageChange: (pageCards: any[]) => void;
}

const PaginationFooter = ({
  data,
  itemsLabel,
  itemsPerPageOptions,
  itemsPerPageText,
  pageLabel,
  prevPageLabel,
  nextPageLabel,
  shouldResetPage,
  handlePageChange,
}: PaginationFooterProps) => {
  const initialItemsPerPage = itemsPerPageOptions[0]?.value;

  const [currentPageValue, setCurrentPageValue] = useState(0);
  const [currentItemsPerPage, setCurrentItemsPerPage] =
    useState<string>(initialItemsPerPage);

  const itemsPerPage = parseInt(currentItemsPerPage, 10);
  const pageCount: number = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const startIndex = currentPageValue * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);
    handlePageChange(currentPageData);
  }, [currentPageValue, itemsPerPage, data]);

  const resetPageValue = () => {
    setCurrentPageValue(0);
  };

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentItemsPerPage(event.target.value);
    resetPageValue();
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    value: React.SetStateAction<number>
  ) => {
    setCurrentPageValue(value);
  };

  const onFirstPageClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ) => {
    onPageChange(event, 0);
  };

  const onPreviousPageClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ) => {
    onPageChange(event, currentPageValue - 1);
  };

  const onNextPageClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ) => {
    onPageChange(event, currentPageValue + 1);
  };

  const onLastPageClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ) => {
    const lastPage = pageCount - 1;
    onPageChange(event, lastPage);
  };

  useEffect(() => {
    resetPageValue();
  }, [shouldResetPage]);

  return (
    <div className="flex flex-col gap-y-6 md:flex-row align-middle justify-between">
      <div className="flex gap-4 align-middle justify-between">
        <p className="self-center">
          Total {itemsLabel} : {data?.length}
        </p>
        <div className="flex gap-2 align-middle">
          <p className="self-center">{itemsPerPageText}</p>
          <select
            value={currentItemsPerPage}
            onChange={handleItemsPerPageChange}
            id="countries"
            className="bg-[#1F2937] py-0 border text-sm rounded-lg outline-none focus:ring-transparent focus:border-gray-50"
          >
            <option selected defaultValue={6} value="6">
              6
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 items-center self-center">
        <Button
          className="flex align-middle hover:cursor-pointer hover:text-[#3ED7F5] disabled:cursor-no-drop"
          onClick={onFirstPageClick}
          disabled={currentPageValue === 0}
          aria-label="First Page"
        >
          <FiChevronsLeft fontSize={"20px"} />
        </Button>
        <Button
          disabled={currentPageValue === 0}
          aria-label="previous page"
          onClick={onPreviousPageClick}
        >
          <FiChevronLeft />
          {prevPageLabel}
        </Button>
        <p className="text-sm self-center">
          {pageLabel} {currentPageValue + 1} of {pageCount}
        </p>
        <Button
          className="flex align-middle hover:cursor-pointer hover:text-[#3ED7F5] disabled:cursor-no-drop"
          onClick={onNextPageClick}
        >
          {nextPageLabel} <FiChevronRight />
        </Button>
        <Button
          className="hover:cursor-pointer"
          onClick={onLastPageClick}
          disabled={currentPageValue === pageCount - 1}
        >
          <FiChevronsRight />
        </Button>
      </div>
    </div>
  );
};

export default PaginationFooter;
