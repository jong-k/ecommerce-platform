import { ISSUE_STATE } from "../enums";

export const initialIssueList = [
  /*
  {
    phase: "todo",
    label: "할 일",
    items: [],
  }
   */
  {
    phase: ISSUE_STATE.TODO.value,
    label: ISSUE_STATE.TODO.label,
    items: [],
  },
  {
    phase: ISSUE_STATE.IN_PROGRESS.value,
    label: ISSUE_STATE.IN_PROGRESS.label,
    items: [],
  },
  {
    phase: ISSUE_STATE.COMPLETE.value,
    label: ISSUE_STATE.COMPLETE.label,
    items: [],
  },
];

export const testIssueList = [
  {
    phase: "todo",
    label: "할 일",
    items: [
      {
        title: "청소",
        description: "화장실 청소하기",
        state: "할 일",
        assignee: "김종한",
        dueDate: "2021-01-05",
      },
    ],
  },
  {
    phase: ISSUE_STATE.IN_PROGRESS.value,
    label: ISSUE_STATE.IN_PROGRESS.label,
    items: [
      {
        title: "요리",
        description: "스파게티 만들기",
        state: "진행 중",
        assignee: "김종한",
        dueDate: "2021-01-07",
      },
    ],
  },
  {
    phase: ISSUE_STATE.COMPLETE.value,
    label: ISSUE_STATE.COMPLETE.label,
    items: [],
  },
];

export const assigneeList = [
  {
    id: 1,
    name: "김다희",
  },
  {
    id: 2,
    name: "김종한",
  },
  {
    id: 3,
    name: "나덕경",
  },
  {
    id: 4,
    name: "신원세",
  },
  {
    id: 5,
    name: "이슬기",
  },
  {
    id: 6,
    name: "정규용",
  },
];
