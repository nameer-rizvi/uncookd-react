import React from "react";

export const Wreath = ({ ignoreTitle, title = "Wreath icon", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 31.844 31.844"
    style={{ enableBackground: "new 0 0 31.844 31.844" }}
    xmlSpace="preserve"
    className="wreath"
    {...props}
  >
    {!ignoreTitle ? <title>{title}</title> : null}
    <path
      d="M30.578,17.446c0.539-0.289,1.215-1.538,1.215-1.538s-1.414-0.125-1.953,0.165c-0.053,0.029-0.096,0.072-0.146,0.106
    c0.073-0.503,0.122-1.014,0.142-1.533c0.338,0.091,0.825-0.062,1.178-0.375c0.459-0.406,0.83-1.776,0.83-1.776
    s-1.404,0.204-1.863,0.61c-0.057,0.05-0.096,0.113-0.146,0.17c-0.032-0.538-0.1-1.066-0.19-1.586
    c0.346,0.002,0.776-0.259,1.047-0.638c0.354-0.499,0.404-1.917,0.404-1.917s-1.322,0.516-1.676,1.015
    c-0.037,0.052-0.057,0.112-0.088,0.168c-0.115-0.409-0.252-0.809-0.404-1.202c0.346-0.057,0.727-0.396,0.918-0.827
    c0.252-0.558,0.028-1.959,0.028-1.959s-1.198,0.762-1.448,1.32c-0.029,0.063-0.039,0.131-0.059,0.197
    c-0.213-0.421-0.448-0.83-0.701-1.225c0.314-0.131,0.613-0.513,0.73-0.946c0.162-0.591-0.277-1.939-0.277-1.939
    s-1.064,0.939-1.225,1.53c-0.021,0.075-0.021,0.153-0.03,0.23c-0.329-0.417-0.679-0.816-1.052-1.193
    c0.285-0.193,0.498-0.645,0.515-1.103c0.022-0.611-0.712-1.825-0.712-1.825s-0.822,1.158-0.846,1.769
    c-0.002,0.07,0,0.141,0.008,0.21c-0.307-0.254-0.623-0.497-0.951-0.725c-0.089-0.302-0.331-0.623-0.664-0.824
    c-0.523-0.315-1.941-0.261-1.941-0.261s0.612,1.279,1.137,1.595c0.232,0.14,0.496,0.21,0.742,0.226
    c0.25,0.17,0.498,0.346,0.735,0.533c-0.638,0.068-1.687,0.7-1.687,0.7s1.156,0.821,1.768,0.844
    c0.469,0.017,0.943-0.171,1.148-0.452c0.252,0.253,0.49,0.52,0.722,0.793c-0.644-0.064-1.776,0.302-1.776,0.302
    s0.938,1.063,1.53,1.224c0.461,0.125,0.97,0.042,1.229-0.197c0.188,0.289,0.361,0.585,0.524,0.889
    c-0.61-0.186-1.846,0.008-1.846,0.008s0.761,1.197,1.319,1.447c0.416,0.187,0.91,0.196,1.209,0.029
    c0.101,0.261,0.192,0.527,0.276,0.796c-0.557-0.307-1.825-0.356-1.825-0.356s0.518,1.321,1.017,1.675
    c0.376,0.267,0.866,0.373,1.194,0.26c0.062,0.355,0.11,0.715,0.145,1.08c-0.496-0.411-1.665-0.73-1.665-0.73
    s0.205,1.404,0.612,1.861c0.301,0.34,0.746,0.551,1.089,0.522c-0.013,0.364-0.036,0.726-0.078,1.083
    c-0.36-0.523-1.479-1.134-1.479-1.134s-0.125,1.414,0.166,1.952c0.233,0.434,0.662,0.746,1.021,0.752
    c-0.079,0.316-0.163,0.632-0.265,0.939c-0.256-0.568-1.365-1.353-1.365-1.353s-0.289,1.39-0.062,1.958
    c0.164,0.419,0.508,0.768,0.836,0.859c-0.134,0.283-0.271,0.562-0.424,0.832c-0.145-0.604-1.09-1.582-1.09-1.582
    s-0.543,1.311-0.428,1.912c0.082,0.438,0.349,0.84,0.65,0.998c-0.195,0.264-0.396,0.523-0.611,0.772
    c-0.01-0.617-0.768-1.786-0.768-1.786s-0.785,1.182-0.789,1.792c-0.002,0.454,0.186,0.908,0.459,1.116
    c-0.236,0.215-0.479,0.425-0.729,0.623c0.001-0.012,0.005-0.021,0.006-0.033c0.073-0.607-0.556-1.88-0.556-1.88
    s-0.916,1.082-0.99,1.688c-0.053,0.418,0.066,0.844,0.281,1.094c-0.31,0.189-0.625,0.367-0.951,0.529
    c0.033-0.088,0.062-0.178,0.08-0.271c0.117-0.601-0.42-1.914-0.42-1.914s-0.992,1.015-1.108,1.616
    c-0.081,0.412,0.008,0.846,0.204,1.111c-0.571,0.215-1.164,0.381-1.768,0.518c-0.355-1.17-1.431-2.028-2.716-2.028
    c-1.286,0-2.361,0.856-2.716,2.028c-0.604-0.135-1.197-0.303-1.768-0.518c0.196-0.266,0.285-0.699,0.204-1.111
    c-0.116-0.602-1.108-1.616-1.108-1.616s-0.538,1.313-0.42,1.914c0.018,0.093,0.047,0.183,0.08,0.271
    c-0.326-0.162-0.642-0.34-0.951-0.529c0.213-0.25,0.333-0.676,0.281-1.094c-0.074-0.606-0.991-1.688-0.991-1.688
    s-0.628,1.271-0.555,1.88c0.001,0.012,0.005,0.021,0.006,0.033c-0.251-0.198-0.493-0.407-0.729-0.623
    c0.272-0.208,0.461-0.663,0.458-1.116c-0.003-0.612-0.789-1.792-0.789-1.792s-0.757,1.169-0.767,1.786
    c-0.214-0.249-0.416-0.509-0.611-0.772c0.301-0.158,0.567-0.56,0.65-0.998c0.116-0.603-0.428-1.912-0.428-1.912
    s-0.945,0.979-1.09,1.582c-0.152-0.271-0.29-0.549-0.423-0.832c0.329-0.092,0.671-0.44,0.836-0.859
    c0.226-0.57-0.063-1.958-0.063-1.958s-1.11,0.784-1.366,1.353c-0.102-0.309-0.186-0.623-0.264-0.939
    c0.358-0.006,0.787-0.318,1.02-0.752c0.291-0.539,0.167-1.952,0.167-1.952s-1.121,0.611-1.48,1.134
    c-0.042-0.356-0.065-0.718-0.078-1.083c0.342,0.029,0.788-0.183,1.089-0.522C4.525,13.614,4.73,12.21,4.73,12.21
    s-1.168,0.319-1.665,0.73c0.033-0.364,0.082-0.725,0.145-1.08c0.327,0.113,0.818,0.007,1.194-0.26
    C4.903,11.247,5.42,9.925,5.42,9.925s-1.268,0.049-1.825,0.356c0.084-0.27,0.176-0.535,0.277-0.796
    c0.3,0.167,0.794,0.157,1.208-0.029C5.639,9.207,6.4,8.009,6.4,8.009S5.16,7.818,4.549,8.004C4.713,7.7,4.887,7.403,5.074,7.115
    c0.26,0.238,0.769,0.322,1.23,0.197c0.591-0.161,1.53-1.224,1.53-1.224S6.7,5.723,6.057,5.787c0.231-0.273,0.469-0.54,0.721-0.793
    c0.206,0.281,0.681,0.468,1.149,0.452c0.611-0.022,1.768-0.844,1.768-0.844s-1.049-0.632-1.687-0.7
    C8.246,3.715,8.493,3.54,8.744,3.37c0.245-0.016,0.51-0.086,0.742-0.226c0.524-0.316,1.136-1.595,1.136-1.595
    s-1.417-0.055-1.941,0.26C8.348,2.009,8.106,2.331,8.016,2.632C7.688,2.86,7.372,3.104,7.066,3.357
    c0.006-0.07,0.009-0.14,0.007-0.21C7.05,2.535,6.228,1.378,6.228,1.378S5.492,2.591,5.515,3.203
    c0.017,0.458,0.229,0.91,0.514,1.102C5.657,4.683,5.307,5.082,4.978,5.499c-0.01-0.077-0.01-0.155-0.03-0.23
    c-0.161-0.591-1.225-1.53-1.225-1.53s-0.44,1.349-0.278,1.939c0.118,0.434,0.417,0.816,0.732,0.947
    C3.924,7.02,3.689,7.427,3.476,7.85c-0.02-0.066-0.03-0.134-0.058-0.197c-0.251-0.558-1.449-1.32-1.449-1.32
    s-0.224,1.4,0.028,1.958c0.193,0.43,0.574,0.77,0.918,0.827C2.764,9.51,2.627,9.91,2.511,10.319
    c-0.031-0.056-0.051-0.116-0.088-0.168c-0.354-0.5-1.676-1.016-1.676-1.016s0.05,1.418,0.405,1.917
    c0.27,0.378,0.701,0.64,1.047,0.638c-0.092,0.52-0.159,1.048-0.191,1.586c-0.049-0.057-0.09-0.12-0.146-0.17
    C1.404,12.699,0,12.497,0,12.497s0.37,1.37,0.829,1.776c0.353,0.313,0.84,0.466,1.178,0.375c0.02,0.519,0.067,1.029,0.142,1.533
    c-0.05-0.034-0.092-0.077-0.146-0.106c-0.539-0.291-1.953-0.165-1.953-0.165s0.676,1.248,1.215,1.539
    c0.386,0.207,0.851,0.25,1.162,0.125c0.1,0.394,0.214,0.779,0.347,1.16c-0.045-0.023-0.083-0.056-0.13-0.074
    c-0.569-0.225-1.958,0.066-1.958,0.066s0.817,1.159,1.387,1.383c0.442,0.176,0.956,0.149,1.241-0.056
    c0.181,0.384,0.376,0.759,0.589,1.124c-0.045-0.013-0.091-0.027-0.137-0.035c-0.601-0.115-1.912,0.428-1.912,0.428
    s1.019,0.988,1.621,1.103c0.473,0.09,0.977-0.036,1.215-0.297c0.257,0.351,0.528,0.688,0.816,1.015
    c-0.039-0.002-0.077-0.008-0.116-0.007c-0.612,0.004-1.793,0.791-1.793,0.791s1.19,0.771,1.802,0.769
    c0.472-0.004,0.941-0.215,1.132-0.508c0.276,0.254,0.559,0.498,0.854,0.729c-0.026,0.002-0.052-0.004-0.078-0.001
    c-0.608,0.075-1.689,0.993-1.689,0.993s1.271,0.629,1.878,0.554c0.503-0.062,0.973-0.36,1.094-0.704
    c0.236,0.146,0.468,0.301,0.713,0.434c-0.601,0.25-1.413,1.043-1.413,1.043s1.312,0.533,1.912,0.414
    c0.485-0.094,0.922-0.412,1.033-0.752c0.724,0.287,1.479,0.512,2.255,0.676c0.105,1.479,1.326,2.649,2.831,2.649
    s2.726-1.17,2.831-2.649c0.776-0.164,1.531-0.389,2.256-0.676c0.109,0.34,0.547,0.658,1.032,0.752
    c0.601,0.119,1.914-0.418,1.914-0.418s-0.812-0.793-1.413-1.043c0.245-0.134,0.477-0.285,0.713-0.434
    c0.121,0.343,0.592,0.643,1.094,0.704c0.607,0.075,1.879-0.554,1.879-0.554s-1.082-0.918-1.689-0.994
    c-0.025-0.002-0.052,0.004-0.078,0.002c0.295-0.231,0.578-0.475,0.854-0.729c0.191,0.293,0.66,0.504,1.133,0.508
    c0.611,0.004,1.802-0.769,1.802-0.769s-1.181-0.787-1.793-0.791c-0.039,0-0.077,0.005-0.116,0.007
    c0.288-0.324,0.559-0.664,0.816-1.015c0.238,0.261,0.742,0.388,1.215,0.297c0.602-0.114,1.621-1.103,1.621-1.103
    s-1.311-0.543-1.912-0.429c-0.046,0.009-0.092,0.022-0.137,0.036c0.213-0.363,0.408-0.738,0.589-1.124
    c0.284,0.205,0.798,0.231,1.241,0.056c0.57-0.224,1.387-1.384,1.387-1.384s-1.389-0.29-1.958-0.065
    c-0.047,0.02-0.085,0.051-0.13,0.074c0.133-0.379,0.246-0.767,0.347-1.16C29.727,17.696,30.191,17.653,30.578,17.446z"
    />
  </svg>
);
