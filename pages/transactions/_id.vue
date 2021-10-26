<template>
  <div class="pb-5">
    <BaseTabs :headers="tabHeaders" :current-tab.sync="current_tab">
      <template #overview>
        <div class="divide-y divide-gray-100 ">
          <div class="py-5">
            <table class="table-auto w-full">
              <tbody>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Signature
                  </td>
                  <td
                    class="relative max-w-0 pr-6 py-3 text-gray-900 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                  >
                    3hKnndYWG86zbM9wwMhkyheQyQRWj5kyDagc4it5nsF4wZTZC26yAEVy41pvbUH6ehH9J75yANPm9eQjYvJVYKoS
                  </td>
                </tr>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Block
                  </td>
                  <td class="pr-6 py-3 text-gray-900">#103244130</td>
                </tr>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Timestamp
                  </td>
                  <td class="pr-6 py-3 text-gray-900">30 minutes ago</td>
                </tr>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Result
                  </td>
                  <td class="pr-6 py-3 text-gray-900">Fail</td>
                </tr>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Signer
                  </td>
                  <td class="pr-6 py-3 text-gray-900">
                    <a href="" class="text-blue-500">
                      HXnWFNs2oSfcYUojy1tAW4P3EQTamPTNSduEhPhWCCXNicon
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Fee
                  </td>
                  <td class="pr-6 py-3">
                    0.000005 SOL
                  </td>
                </tr>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Previous Block Hash
                  </td>
                  <td class="pr-6 py-3 text-gray-900">
                    GfvhyY113suTQpdLaUy49nqd9BzDS86EqVKbt7Sgk9f8
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="py-5">
            <div class="text-xl font-bold text-blue-500 mb-5">
              Instruction Details
            </div>
            <div class="flex flex-col">
              <div class="text-md font-bold text-gray-900">
                #1 - Instruction 0
              </div>

              <div class="mt-3 text-base text-gray-900 rounded-xl p-3 bg-gray-100 border border-gray-200">
                <table class="table-auto w-full">
                  <colgroup>
                    <col width="200px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td class="text-base text-gray-500 pr-6 py-3">
                        Interact With
                      </td>
                      <td
                        class="relative max-w-0 pr-6 py-3 text-gray-900 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                      >
                        Pyth Oracle -
                        <a href="#" class="text-base text-blue-500">FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-base text-gray-500 pr-6 py-3">
                        Instruction Data
                      </td>
                      <td
                        class="relative max-w-0 pr-6 py-3 text-gray-900 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                      >
                        02000000070000000100000000000000e066445f79050000e00ddc3a00000000efce270600000000
                      </td>
                    </tr>
                    <tr class="align-top">
                      <td class="text-base text-gray-500 pr-6 py-3">
                        Input Accounts
                      </td>
                      <td
                        class="relative max-w-0 pr-6 py-3 overflow-ellipsis whitespace-nowrap break-words overflow-hidden text-gray-900 leading-7"
                      >
                        <span>
                          <span class="text-base text-gray-500">#1 - Account0 -</span>
                          <a href="#" class="text-base text-blue-500"
                            >HXnWFNs2oSfcYUojy1tAW4P3EQTamPTNSduEhPhWCCXNicon</a
                          >
                          <br />
                        </span>
                        <span>
                          <span class="text-base text-gray-500">#2 - Account1 -</span>
                          <a href="#" class="text-base text-blue-500"
                            >GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMUicon</a
                          >
                          <br />
                        </span>
                        <span>
                          <span class="text-base text-gray-500">#3 - Account2 -</span>
                          <a href="#" class="text-base text-blue-500">Clock Programicon</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="py-5">
            <div class="text-xl font-bold text-blue-500 mb-5">
              Program log
            </div>

            <div
              class="flex flex-col gap-5 mt-3 text-base text-gray-900 rounded-xl px-3 py-6 bg-gray-100 border border-gray-200"
            >
              <div class="text-base text-gray-900">
                Program FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH invoke [1]
              </div>
              <div class="text-base text-gray-900">
                Program FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH consumed 678 of 200000 compute units Program
              </div>
              <div class="text-base text-gray-900">
                FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH failed: invalid program argument
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseTabs>
  </div>
</template>

<script>
const tabHeaders = [
  {
    name: 'Overview',
    key: 'overview',
  },
  {
    name: 'SOL Balance Change',
    key: 'sol_balance_change',
  },
  {
    name: 'Token Balance Change',
    key: 'token_balance_change',
  },
];
export default {
  name: 'Detail',

  async asyncData({ $axios, params }) {
    const data = await $axios.$post('', {
      jsonrpc: '2.0',
      method: 'txns_detail',
      params: [params.id],
      id: 1,
    });
    if (data.result) {
      return { transaction: data.result };
    }

    return { transaction: null };
  },

  data() {
    return {
      tabHeaders,
      current_tab: 'overview',
    };
  },
};
</script>
