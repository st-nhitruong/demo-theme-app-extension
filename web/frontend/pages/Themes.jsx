import { Page, Layout, LegacyCard, LegacyStack, Text } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';

export default function Themes() {
  return (
    <Page>
      <TitleBar title="Themes" />
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <LegacyStack>
              <LegacyStack.Item fill>
                <div className="d-flex">
                  <div className="mr-2">
                    <Text>Dawn</Text>
                  </div>
                </div>
              </LegacyStack.Item>
              <LegacyStack.Item>
                <a
                  href={`https://sthydrogen.myshopify.com/admin/themes/current/editor?context=apps&template=index&activateAppId=e162093b-251b-4cb2-b307-0d0f51bf5f99/chat_widget`}
                  target="_blank"
                  className="preview"
                >
                  Install
                </a>
              </LegacyStack.Item>
            </LegacyStack>
            <LegacyStack>
              <LegacyStack.Item fill>
                <div className="d-flex">
                  <div className="mr-2">
                    <Text>Dawn2</Text>
                  </div>
                </div>
              </LegacyStack.Item>
              <LegacyStack.Item>
                <a
                  href={`https://sthydrogen.myshopify.com/admin/themes/current/editor?template=product&activateAppId=e162093b-251b-4cb2-b307-0d0f51bf5f99/star_rating&target=mainSection`}
                  target="_blank"
                  className="preview"
                >
                  Install
                </a>
              </LegacyStack.Item>
            </LegacyStack>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
