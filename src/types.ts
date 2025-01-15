// // types.ts
// export interface Point {
//     id: number; // Убедитесь, что id обязателен
//     x: number;
//     y: number;
//     cluster?: number;
//     isBoundary?: boolean;
//   }


// export interface Point {
//     id: number;
//     x: number;
//     y: number;
//     cluster?: number;
//     isBoundary?: boolean;
//   }


export interface Point {
    id: number;
    x: number;
    y: number;
    cluster?: number;
    isBoundary?: boolean;
  }
  
  export interface Cluster {
    id: number;
    points: Point[];
  }
  
  export interface Boundary {
    id: number;
    clusterId: number;
    points: Point[];
  }