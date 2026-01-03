describe('ユーザー登録機能', () => {
    test('ユーザー情報を登録できる', () => {
        // Arrange(準備): テストデータを準備
        const name = '佐藤花子';
        const email = 'sato@example.com';

        // Act(実行)
        const registeredUser = registerUser(name, email);

        // Assert(検証)
        expect(registeredUser).toBeDefined();
        expect(registeredUser.name).toBe('佐藤花子');
        expect(registeredUser.email).toBe('sato@example.com');
        expect(typeof registeredUser.id).toBe('string');
    });

})

describe('Repositoryをモック化したテスト', () => {
    let userService: UserService;
    let mockUserRepository: jest.Mocked<UserRepository>;

    // 各テスト前に実行される共通処理-テスト間で共通の準備を書く
    beforeEach(() => {
        // Repositoryインターフェースをモック化
        mockUserRepository = {
            // jest.fn()でモック関数を作成
            save: jest.fn(),
            findByEmail: jest.fn()
        };
        // UserServiceのインスタンスを作成
        // モック化したRepositoryを注入する
        userService = new userService(mockUserRepository);
    });
    test('ユーザー情報を登録できる', async () => {
        // Arrange
        const name = '佐藤花子';
        const email = 'sato@example.com';
        const savedUser: User = {
            id: 'user123',
            name: '佐藤花子',
            email: 'sato@example.com',
            createdAt: new Date()
        };

        // Repositoryのモック設定
        mockUserRepository.findByEmail.mockResolvedValue(null);
        mockUserRepository.save.mockResolvedValue(savedUser);

        // Act
        const result = await userService.registeredUser(name, email);

        // Assert
        expect(result).toEqual(savedUser);
        expect(mockUserRepository.save).toHaveBeenCalledWith(
            expect.objectContaining({
                name: '佐藤花子',
                email: 'sato@example.com'
            })
        );
    });
})