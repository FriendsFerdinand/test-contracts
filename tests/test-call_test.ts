
import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v0.14.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that <...>",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        let deployerWallet = accounts.get("deployer") as Account;
        let wallet_1 = accounts.get('wallet_1')!;

        let block = chain.mineBlock([
            Tx.contractCall(
                `test-call`,
                "call-me",
                [],
                wallet_1.address,
            ),
        ]);
        // assertEquals(block.receipts.length, 1);
        console.log(block.receipts[0].result);
        // assertEquals(block.height, 2);
    },
});
