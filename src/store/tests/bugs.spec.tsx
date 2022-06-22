// import { EnhancedStore } from "@reduxjs/toolkit";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
// import { CombinedState, AnyAction } from "redux";
// import { loadblinks } from "../blinks";
// import configureStore from "../configureStore";

// describe("blinksSlice", () => {
//   let fakeAxios: MockAdapter;
//   let store: EnhancedStore<
//     CombinedState<{
//       entities: CombinedState<{
//         blinks: { list: any; loading: boolean; lastFetch: number };
//       }>;
//     }>,
//     AnyAction,
//     any[]
//   >;

//   beforeEach(() => {
//     fakeAxios = new MockAdapter(axios);
//     store = configureStore();
//   });

//   const blinksSlice = () => store.getState().entities.blinks;

//   const createState = () => ({
//     entities: {
//       bugs: {
//         list: [],
//       },
//     },
//   });

//   describe("loading bugs", () => {
//     describe("if the bugs exist in the cache", () => {
//       it("they should not be fetched from the server again.", async () => {
//         fakeAxios.onGet("").reply(200, [{ id: 1 }]);

//         await store.dispatch(loadblinks());
//         await store.dispatch(loadblinks());

//         expect(fakeAxios.history.get.length).toBe(2);
//       });
//     });

//     describe("if the bugs don't exist in the cache", () => {
//       it("they should be fetched from the server and put in the store", async () => {
//         fakeAxios.onGet("").reply(200, [{ id: 1 }]);

//         await store.dispatch(loadblinks());

//         expect(blinksSlice().list).toHaveLength(1);
//       });

//       describe("loading indicator", () => {
//         it("should be true while fetching the bugs", () => {
//           fakeAxios.onGet("").reply(() => {
//             expect(blinksSlice().loading).toBe(true);
//             return [200, [{ id: 2 }]];
//           });

//           store.dispatch(loadblinks());
//         });

//         it("should be false after the bugs are fetched", async () => {
//           fakeAxios.onGet("").reply(200, [{ id: 1 }]);

//           await store.dispatch(loadblinks());

//           expect(blinksSlice().loading).toBe(false);
//         });

//         it("should be false if the server returns an error", async () => {
//           fakeAxios.onGet("").reply(500);

//           await store.dispatch(loadblinks());

//           expect(blinksSlice().loading).toBe(false);
//         });
//       });
//     });
//   });

//   // it("should mark the bug as resolved if it's saved to the server.", async () => {
//   //   // AAA
//   //   fakeAxios.onPatch("/1").reply(200, { id: 1, resolved: true });
//   //   fakeAxios.onPost("").reply(200, { id: 1 });

//   //   await store.dispatch(addBug({}));
//   //   await store.dispatch(resolveBug(1));

//   //   expect(blinksSlice().list[0].resolved).toBe(true);
//   // });

//   // it("should not mark the bug as resolved if it's not saved to the server.", async () => {
//   //   // AAA
//   //   fakeAxios.onPatch("/1").reply(500);
//   //   fakeAxios.onPost("").reply(200, { id: 1 });

//   //   await store.dispatch(addBug({}));
//   //   await store.dispatch(resolveBug(1));

//   //   expect(blinksSlice().list[0].resolved).not.toBe(true);
//   // });

//   // it("should add the bug to the store if it's saved to the server", async () => {
//   //   const bug = { description: "a" };
//   //   const savedBug = { ...bug, id: 1 };
//   //   fakeAxios.onPost("").reply(200, savedBug);

//   //   await store.dispatch(addBug(bug));

//   //   expect(blinksSlice().list).toContainEqual(savedBug);
//   // });

//   // it("should not add the bug to the store if it's not saved to the server", async () => {
//   //   const bug = { description: "a" };
//   //   fakeAxios.onPost("").reply(500);

//   //   await store.dispatch(addBug(bug));

//   //   expect(blinksSlice().list).toHaveLength(0);
//   // });

//   // describe("selectors", () => {
//   //   it("getUnresolvedBugs", () => {
//   //     const state = createState();
//   //     state.entities.bugs.list = [
//   //       { id: 1, resolved: true },
//   //       { id: 2 },
//   //       { id: 3 },
//   //     ];

//   //     const result = getUnresolvedBugs(state);

//   //     expect(result).toHaveLength(2);
//   //   });
//   // });
// });
