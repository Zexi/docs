import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function OcbootClone() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <CodeBlock language='bash'>
        {`# 下载 ocboot 工具到本地
$ git clone -b ${siteConfig.customFields.release_branch} https://github.com/yunionio/ocboot && cd ./ocboot`}
      </CodeBlock>
    </div>
  )
}
