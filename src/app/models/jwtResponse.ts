export interface JwtResponse{
    success:boolean,
    data:any,
    messages:string[],
    pageNo: number,
    totalPages: number,
    itemsPerPage:number
}