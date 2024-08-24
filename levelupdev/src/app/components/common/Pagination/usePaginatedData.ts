import { useState, useEffect } from 'react';

interface PaginationOptions {
    pageSize: number;
}

interface PaginatedData<T> {
    currentPage: number;
    totalPages: number;
    data: T[];
}

function usePaginatedData<T>(data: T[], options: PaginationOptions): PaginatedData<T> {
    const { pageSize } = options;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [paginatedData, setPaginatedData] = useState<T[]>([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const slicedData = data.slice(startIndex, endIndex);
        setPaginatedData(slicedData);
        setTotalPages(Math.ceil(data.length / pageSize));
    }, [data, currentPage, pageSize]);

    return {
        currentPage,
        totalPages,
        data: paginatedData,
    };
}

export default usePaginatedData;